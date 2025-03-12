import { useInView } from 'react-intersection-observer';

export function LazyImage({ src, alt, ...rest }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      {inView ? (
        <img src={src} alt={alt} {...rest} />
      ) : (
        <div style={{ height: '200px', backgroundColor: '#eee' }}>
          {/* Placeholder mientras no está visible */}
        </div>
      )}
    </div>
  );
}