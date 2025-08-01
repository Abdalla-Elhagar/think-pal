import Image, { StaticImageData } from 'next/image'

export interface commentsCardTypes {
    image: StaticImageData;
    name: string;
    comment: string;
}


function CommentsCard({image, name, comment}:commentsCardTypes) {
  return (
    <>
      <Image src={image} alt="Profile Image" width={100} height={100} quality={20} className='rounded-full size-[100px]' />
      <p>{comment}</p>
      <h3 className='text-xl font-bold'>{name}</h3>

    </>
  )
}

export default CommentsCard