import Image from 'next/image'
    
const HomePageImage = () => {
    return (
        <Image
            layout="fill"
            src="/nature.jpg"
            alt="backgroundImage"
            className="home-image"
        />
    )
}

export default HomePageImage