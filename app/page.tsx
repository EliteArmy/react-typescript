import Link from 'next/link';

export default function Home() {
  const links = [
    '01-variables',
    '02-functions',
    '03-react-components-part-01',
    '04-react-components-part-02',
    '05-react-components-css',
    '06-record',
    '07-functions-as-props',
    '08-children',
    '09-state',
    '10-components-and-ref',
    '11-rest-spread',
    '12-intersection-extends',
    '13-event-handler',
    '14-hooks-useState',
    '15-hooks-useRef',
    '16-const',
    '17-discriminated-unions',
    '18-omit',
    '19-as-type-assertion',
    '20-type-file',
    '21-unknown',
  ];
  return (
    <nav className='flex flex-col space-y-4 mt-4 mb-6'>
      {links.map((link) => (
        <Link
          key={link}
          href={link}
          className='capitalize'>
          {link.replaceAll('-', ' ')}
        </Link>
      ))}
    </nav>
  );
}
