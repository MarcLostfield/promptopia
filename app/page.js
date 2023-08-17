import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className='flex-col w-full flex-center'>
      <h1 className='text-center head_text'>
        Discover & Share
        <br className='' />
        <span className='text-center orange_gradient'>AI-Powered Prompts</span>
      </h1>
      <p className='text-center desc'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam repellat
        perferendis libero aperiam unde. Accusantium dolores aperiam provident
        eum vitae id quis nisi quas quidem.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
