import Image from 'next/image';

export default function ImageGallery() {


  return (
    <div className="w-full mx-auto">
      <div className="grid grid-cols-3 gap-2 h-80">
        <div className="col-span-2 relative overflow-hidden rounded-lg">
          <Image 
            src="https://imagedelivery.net/upczkOXHorYX26Lz6iRC9A/723d732d-96e4-4eeb-84dd-7017b050fd00/public" 
            alt="Night field with players"
            fill
            className="object-cover" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
        </div>
        
        <div className="grid grid-rows-2 gap-2 h-full">
          <div className="relative overflow-hidden rounded-lg">
            <Image 
              src="https://imagedelivery.net/upczkOXHorYX26Lz6iRC9A/723d732d-96e4-4eeb-84dd-7017b050fd00/public" 
              alt="Night field view"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg">
            <Image 
              src="https://imagedelivery.net/upczkOXHorYX26Lz6iRC9A/723d732d-96e4-4eeb-84dd-7017b050fd00/public" 
              alt="Additional field image"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white font-medium text-lg">
              +2 photos
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}