import { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  figureNumber: string;
  caption: string;
  sourceLabel: string;
  aspectClass?: string;
  isFullBleed?: boolean;
}

export function EditorialImage({
  src,
  alt,
  figureNumber,
  caption,
  sourceLabel,
  aspectClass = 'aspect-[4/3]',
  isFullBleed = false,
}: EditorialImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="w-full">
      <div
        className={`relative overflow-hidden bg-[#EBE5D7] ${
          isFullBleed ? '' : 'border border-[#173F35]/15'
        } ${aspectClass}`}
      >
        {!failed ? (
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.015]"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#EBE5D7] via-[#F5F1E7] to-[#B8C9B4]/30 p-8 text-center">
            <ImageIcon className="mb-3 h-8 w-8 text-[#527A64]" strokeWidth={1.25} />
            <p className="font-serif text-base text-[#173F35]">{figureNumber}</p>
            <p className="mt-1 max-w-xs text-sm text-[#173F35]/70">{caption}</p>
          </div>
        )}
      </div>
      <figcaption className="mt-3 flex flex-col gap-1 border-b border-[#173F35]/10 pb-3 sm:flex-row sm:items-baseline sm:justify-between">
        <span className="text-xs leading-relaxed text-[#173F35]/80">
          <strong className="font-serif font-medium italic text-[#173F35]">{figureNumber}</strong>
          <span className="mx-2 text-[#C9B68C]" aria-hidden="true">
            ·
          </span>
          {caption}
        </span>
        <span className="shrink-0 text-[11px] tracking-wide text-[#527A64]">{sourceLabel}</span>
      </figcaption>
    </figure>
  );
}
