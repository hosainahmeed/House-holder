interface PropertyImageProps {
  src: string;
  alt?: string;
}

export default function PropertyImage({ src, alt = 'Property image' }: PropertyImageProps) {
  return (
    <div className="relative w-full aspect-video lg:aspect-3/1 rounded-2xl overflow-hidden shadow-md">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}
