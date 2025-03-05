import React from 'react';
import ImageUploading from 'react-images-uploading';
import RoundedImage from '@/ui/RoundedImage/RoundedImage';

function ImageUploader({ setImage, alt }) {
	const [images, setImageLists] = React.useState([]);

	const onChange = async (imageList, addUpdateIndex) => {
		setImageLists(imageList);
		if (imageList.length > 0) {
			const imageFile = imageList[addUpdateIndex].file;
			await uploadImage(imageFile);
		}
	};

	const uploadImage = async (imageFile) => {
		const formData = new FormData();
		formData.append('image', imageFile);

		try {
			const response = await fetch('/api/upload', {
				method: 'POST',
				body: formData,
			});

			if (!response.ok) {
				throw new Error('Upload failed');
			}

			const data = await response.json();
			setImage(data.filePath);
		} catch (error) {
			console.error('Upload error:', error);
		}
	};

	return (
		<div className='App'>
			<ImageUploading
				value={images}
				onChange={onChange}
				dataURLKey='data_url'
				acceptType={['jpeg', 'jpg', 'png']}>
				{({
					imageList,
					onImageUpload,
					onImageRemoveAll,
					onImageUpdate,
					onImageRemove,
					isDragging,
					dragProps,
				}) => (
					<div className='upload__image-wrapper'>
						<button
							style={isDragging ? { color: 'red' } : null}
							onClick={onImageUpload}
							{...dragProps}>
							Click or Drop here
						</button>
						<button onClick={onImageRemoveAll}>Remove all images</button>
						{imageList.map((image, index) => (
							<div key={index} className='image-item'>
								<RoundedImage src={image.data_url} alt={alt} fallback={'yum'} />
								<div className='image-item__btn-wrapper'>
									<button onClick={() => onImageUpdate(index)}>Update</button>
									<button onClick={() => onImageRemove(index)}>Remove</button>
								</div>
							</div>
						))}
					</div>
				)}
			</ImageUploading>
		</div>
	);
}

export default ImageUploader;
