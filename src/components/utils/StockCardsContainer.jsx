import community from '../../assets/community.png';
import customer_img from '../../assets/customer_service.png';
import education_center from '../../assets/education_center.png';
import StockCard from './cards/StockCard';

const StockCardsContainer = () => {
  return (
    <div className="px-5 lg:px-10 xl:px-20 my-[1rem] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
      <StockCard
        image={customer_img}
        title={'Customer Service'}
        description={'Contact a service rep to get quick response.'}
      />
      <StockCard
        image={education_center}
        title={'Education Center'}
        description={
          'Learn from our education center to help you grow as a confident investor.'
        }
      />
      <StockCard
        image={community}
        title={'Community'}
        description={
          'Connect with others on Bulloak Community to discuss market trends and trading strategies.'
        }
      />
    </div>
  );
};

export default StockCardsContainer;
