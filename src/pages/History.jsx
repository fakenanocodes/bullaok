import bulloak from '../assets/bulloak.png';
import HistioryMap from '../components/HistioryMap';
import MainLayout from '../components/MainLayout';

const History = () => {
  return (
    <MainLayout>
      <div
        style={{
          backgroundImage: `url(${bulloak})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '10rem',
        }}
        className="laviossa text-4xl text-center text-[#8E0789] font-bold py-[2rem] mt-[8rem] xl:mt-[10rem] flex flex-col justify-end"
      >
        <p>History</p>
      </div>
      <HistioryMap />
      <div className="px-5 lg:px-12 xl:px-40 py-[3rem]">
        <p className="text-2xl font-semibold text-[#8E0789]">
          This is our story
        </p>

        <p className="text-base lg:text-lg mt-[1.5rem]">
          Bulloak Finance Management has a rich and fascinating history that
          began in 2013. It all started with a vision to transform the financial
          industry and provide individuals with the tools and knowledge to
          achieve their financial goals. In the early days, Bulloak Finance
          Management was founded by a group of passionate finance professionals
          who recognized the need for a comprehensive and accessible financial
          education platform. They believed that by empowering individuals with
          financial literacy, they could help them navigate the complexities of
          the financial world and make informed decisions.
          <br />
          <br />
          From its humble beginnings, Bulloak Finance Management quickly gained
          recognition for its innovative approach to financial education. The
          company&apos;s commitment to excellence and dedication to providing
          high-quality educational resources set them apart from the
          competition. As the years went by, Bulloak Finance Management
          continued to grow and expand its offerings. They introduced new
          courses, workshops, and seminars to cater to the evolving needs of
          their students. The company also embraced technological advancements,
          leveraging online platforms and interactive tools to make learning
          more engaging and accessible.
          <br />
          <br />
          One of the key milestones in Bulloak Finance Management&apos;s history
          was the development of its personalized application. Recognizing that
          everyone has different usage styles and preferences, they created a
          platform that tailors the educational experience to each
          individual&apos;s needs. This personalized approach allowed students
          to use at their own pace and focus on areas most relevant to their
          financial goals. Over time, Bulloak Finance Management became a
          trusted name in the financial education industry. Their commitment to
          providing high-quality content, expert instructors, and practical
          learning opportunities earned them the loyalty and trust of their
          students.
          <br />
          <br />
          Today, Bulloak Finance Management stands as a leading provider of
          financial education, empowering individuals from all walks of life to
          take control of their financial future. Their comprehensive
          educational system, combined with their dedication to student success,
          continues to make a positive impact on the lives of countless
          individuals. As Bulloak Finance Management looks towards the future,
          they remain committed to their mission of providing accessible and
          impactful financial education. They strive to stay at the forefront of
          industry trends, continuously updating their curriculum to reflect the
          changing landscape of finance.
          <br />
          <br />
          In conclusion, Bulloak Finance Management&apos;s journey from its
          founding in 2006 to its current position as a respected financial
          education provider is a testament to their vision, dedication, and
          commitment to empowering individuals with the knowledge and skills
          they need to thrive in the financial world.
        </p>
      </div>
    </MainLayout>
  );
};

export default History;
