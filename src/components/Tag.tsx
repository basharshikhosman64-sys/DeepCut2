import { HTMLAttributes } from 'react';

export default function Tag(props: HTMLAttributes<HTMLDivElement>) {
  const { children } = props;
  return (
    <div className='inline-flex w-fit border bg-accent/10 border-accent/30 rounded-[10px] gap-2 text-accent px-2.5 py-2 items-center'>
      <span className='text-sm'>{children}</span>
    </div>
  );
}
