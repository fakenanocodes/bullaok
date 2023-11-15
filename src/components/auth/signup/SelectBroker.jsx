import { Avatar } from '@mui/material';
import Button from '../../utils/reusables/Button';

const SelectBroker = () => {
  return (
    <div className="w-[100%] max-[640px]:flex-1 flex flex-col justify-between p-5 lg:p-7 lg:h-[90vh]">
      <div className="mb-5">
        <p className="laviossa text-3xl font-semibold">Get Started</p>
        <p className="tracking-wide mt-1">
          Please select the <span className="text-[#8E0789]">broker</span> for
          your preferred <span className="text-[#8E0789]">investment</span>
        </p>
      </div>

      <div className="flex-1 flex flex-col gap-7 mb-5">
        <div className="flex items-start justify-between">
          <div className="flex flex-col items-center gap-3">
            <Avatar src="" alt="" sx={{ height: '80px', width: '80px' }} />
            <div>
              <p className="laviossa text-center text-xs lg:text-sm xl:text-base">
                Cynthia Turner
              </p>
              <p className="text-[#8E0789] text-center text-xs lg:text-sm xl:text-base">
                Cannabis Broker
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Avatar src="" alt="" sx={{ height: '80px', width: '80px' }} />
            <div>
              <p className="laviossa text-center text-xs lg:text-sm xl:text-base">
                Cynthia Turner
              </p>
              <p className="text-[#8E0789] text-center text-xs lg:text-sm xl:text-base">
                Cannabis Broker
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Avatar src="" alt="" sx={{ height: '80px', width: '80px' }} />
            <div>
              <p className="laviossa text-center text-xs lg:text-sm xl:text-base">
                Cynthia Turner
              </p>
              <p className="text-[#8E0789] text-center text-xs lg:text-sm xl:text-base">
                Cannabis Broker
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-evenly">
          <div className="flex flex-col items-center gap-3">
            <Avatar src="" alt="" sx={{ height: '80px', width: '80px' }} />
            <div>
              <p className="laviossa text-center text-xs lg:text-sm xl:text-base">
                Cynthia Turner
              </p>
              <p className="text-[#8E0789] text-center text-xs lg:text-sm xl:text-base">
                Cannabis Broker
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Avatar src="" alt="" sx={{ height: '80px', width: '80px' }} />
            <div>
              <p className="laviossa text-center text-xs lg:text-sm xl:text-base">
                Cynthia Turner
              </p>
              <p className="text-[#8E0789] text-center text-xs lg:text-sm xl:text-base">
                Cannabis Broker
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-between">
          <div className="flex flex-col items-center gap-3">
            <Avatar src="" alt="" sx={{ height: '80px', width: '80px' }} />
            <div>
              <p className="laviossa text-center text-xs lg:text-sm xl:text-base">
                Cynthia Turner
              </p>
              <p className="text-[#8E0789] text-center text-xs lg:text-sm xl:text-base">
                Cannabis Broker
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Avatar src="" alt="" sx={{ height: '80px', width: '80px' }} />
            <div>
              <p className="laviossa text-center text-xs lg:text-sm xl:text-base">
                Cynthia Turner
              </p>
              <p className="text-[#8E0789] text-center text-xs lg:text-sm xl:text-base">
                Cannabis Broker
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Avatar src="" alt="" sx={{ height: '80px', width: '80px' }} />
            <div>
              <p className="laviossa text-center text-xs lg:text-sm xl:text-base">
                Cynthia Turner
              </p>
              <p className="text-[#8E0789] text-center text-xs lg:text-sm xl:text-base">
                Cannabis Broker
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Button>Proceed</Button>
      </div>
    </div>
  );
};

export default SelectBroker;
