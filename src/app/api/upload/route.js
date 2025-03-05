import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';
import crypto from 'crypto';

export async function POST(req) {
	try {
		const formData = await req.formData();
		const file = formData.get('image');

		if (!file) {
			return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
		}

		// Convert file to buffer
		const bytes = await file.arrayBuffer();
		const buffer = Buffer.from(bytes);

		// Compute SHA-256 hash of the file
		const hash = crypto.createHash('sha256').update(buffer).digest('hex');
		const fileExtension = path.extname(file.name);
		const fileName = `${hash}${fileExtension}`;

		// Define upload path
		const uploadDir = path.join(process.cwd(), 'public/uploads');
		const filePath = path.join(uploadDir, fileName);

		// Ensure the uploads directory exists
		await fs.mkdir(uploadDir, { recursive: true });

		// Check if the file already exists
		try {
			await fs.access(filePath);
			return NextResponse.json({
				filePath: `/uploads/${fileName}`,
				message: 'File already exists',
			});
		} catch (error) {
			// File does not exist, so save it
			await fs.writeFile(filePath, buffer);
			return NextResponse.json({
				filePath: `/uploads/${fileName}`,
				message: 'File uploaded successfully',
			});
		}
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
