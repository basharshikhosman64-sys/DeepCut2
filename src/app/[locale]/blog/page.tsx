import { Link } from '@/i18n/routing';
import Button from '../../../components//UI/botton';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/UI/card';

const blogPosts = [
  {
    id: '1',
    title: "The Complete Guide to Classic Men's Haircuts",
    excerpt:
      'Explore timeless hairstyles that never go out of fashion, from the pompadour to the side part.',
    author: 'Marcus Johnson',
    date: '2024-03-15',
    readTime: '5 min read',
    category: 'Styling Tips',
    image: '/blog-1.jpg',
  },
  {
    id: '2',
    title: "Beard Care Essentials: A Beginner's Guide",
    excerpt:
      'Everything you need to know about maintaining a healthy, well-groomed beard at home.',
    author: 'James Wilson',
    date: '2024-03-10',
    readTime: '4 min read',
    category: 'Grooming',
    image: '/blog-2.jpg',
  },
  {
    id: '3',
    title: 'The Art of the Hot Towel Shave',
    excerpt:
      'Discover the history and technique behind the traditional barbershop hot towel shave.',
    author: 'David Rodriguez',
    date: '2024-03-05',
    readTime: '6 min read',
    category: 'Traditional Techniques',
    image: '/blog-3.jpg',
  },
  {
    id: '4',
    title: 'Modern Fading Techniques Explained',
    excerpt:
      'Learn about different fade types and how they can enhance your overall appearance.',
    author: 'Marcus Johnson',
    date: '2024-02-28',
    readTime: '7 min read',
    category: 'Styling Tips',
    image: '/blog-4.jpg',
  },
  {
    id: '5',
    title: 'Choosing the Right Products for Your Hair Type',
    excerpt:
      'A comprehensive guide to selecting the best styling products for your specific hair needs.',
    author: 'David Rodriguez',
    date: '2024-02-20',
    readTime: '5 min read',
    category: 'Product Guide',
    image: '/blog-5.jpg',
  },
  {
    id: '6',
    title: "Barbershop Etiquette: Do's and Don'ts",
    excerpt:
      'Make the most of your barbershop experience with these essential etiquette tips.',
    author: 'James Wilson',
    date: '2024-02-15',
    readTime: '3 min read',
    category: 'Tips',
    image: '/blog-6.jpg',
  },
];

const categories = [
  'All',
  'Styling Tips',
  'Grooming',
  'Traditional Techniques',
  'Product Guide',
  'Tips',
];

export default function BlogPage() {
  return (
    <div className='py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h1 className='text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl'>
            Barbering Blog
          </h1>
          <p className='mt-6 text-lg leading-8 text-slate-600'>
            Expert tips, techniques, and insights from our master barbers
          </p>
        </div>

        {/* Categories filter */}
        <div className='flex justify-center flex-wrap gap-2 mt-12'>
          {categories.map(category => (
            <button
              key={category}
              className='px-4 py-2 rounded-full text-sm font-medium bg-slate-100 text-slate-600 hover:bg-amber-100 hover:text-amber-600 transition-colors'
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured post */}
        <div className='mt-16'>
          <Card className='lg:flex lg:items-center lg:space-x-8 hover:shadow-lg transition-shadow'>
            <div className='lg:w-1/2'>
              <div className='aspect-video bg-slate-300 rounded-lg'></div>
            </div>
            <div className='lg:w-1/2 mt-6 lg:mt-0'>
              <CardHeader>
                <div className='flex items-center gap-2 mb-2'>
                  <span className='px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium'>
                    Featured
                  </span>
                  <span className='text-sm text-slate-500'>
                    {blogPosts[0].category}
                  </span>
                </div>
                <CardTitle className='text-2xl'>{blogPosts[0].title}</CardTitle>
                <p className='text-slate-600'>{blogPosts[0].excerpt}</p>
              </CardHeader>
              <CardContent>
                <div className='flex items-center justify-between text-sm text-slate-500 mb-4'>
                  <span>By {blogPosts[0].author}</span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <Link href={`/blog/${blogPosts[0].id}`}>
                  <Button variant='outline'>Read More</Button>
                </Link>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Blog posts grid */}
        <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {blogPosts.slice(1).map(post => (
            <Card key={post.id} className='hover:shadow-lg transition-shadow'>
              <div className='aspect-video bg-slate-300 rounded-t-lg'></div>
              <CardHeader>
                <div className='flex items-center justify-between text-sm text-slate-500 mb-2'>
                  <span className='px-2 py-1 bg-slate-100 rounded-full text-xs'>
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className='text-lg hover:text-amber-600 transition-colors'>
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </CardTitle>
                <p className='text-slate-600 text-sm'>{post.excerpt}</p>
              </CardHeader>
              <CardContent>
                <div className='flex items-center justify-between text-sm text-slate-500'>
                  <span>By {post.author}</span>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className='mt-20'>
          <Card className='bg-slate-900 text-white'>
            <CardContent className='text-center p-12'>
              <h2 className='text-2xl font-bold mb-4'>Stay Updated</h2>
              <p className='text-slate-300 mb-6'>
                Get the latest barbering tips and trends delivered to your inbox
              </p>
              <div className='flex max-w-md mx-auto gap-4'>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='flex-1 px-4 py-2 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-600'
                />
                <Button
                  variant='primary'
                  className='bg-amber-600 hover:bg-amber-700'
                >
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
