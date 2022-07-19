import Image from 'next/image';

export default HomePageImage = () => {
    return (
        <Image
            layout="fill"
            src="/nature.jpg"
            alt="backgroundImage"
            className="home-image"
        />
    )
}