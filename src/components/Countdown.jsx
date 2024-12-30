import { useCallback, useEffect, useState } from "react";
const Timer3 = () => {
  const [countDownTime, setCountDownTIme] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const getTimeDifference = (countDownTime) => {
    const currentTime = new Date().getTime();
    const timeDiffrence = countDownTime - currentTime;
    let days =
      Math.floor(timeDiffrence / (24 * 60 * 60 * 1000)) >= 10
        ? Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))
        : `0${Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))}`;
    const hours =
      Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) >=
      10
        ? Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))
        : `0${Math.floor(
            (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
          )}`;
    const minutes =
      Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60)) >= 10
        ? Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))
        : `0${Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))}`;
    const seconds =
      Math.floor((timeDiffrence % (60 * 1000)) / 1000) >= 10
        ? Math.floor((timeDiffrence % (60 * 1000)) / 1000)
        : `0${Math.floor((timeDiffrence % (60 * 1000)) / 1000)}`;
    if (timeDiffrence < 0) {
      setCountDownTIme({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
      clearInterval();
    } else {
      setCountDownTIme({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }
  };
  const startCountDown = useCallback(() => {
    const customDate = new Date();
    const countDownDate = new Date(
      2024,
      12,
      0,
      23,
      59,
      59
    );
    setInterval(() => {
      getTimeDifference(countDownDate.getTime());
    }, 1000);
  }, []);
  useEffect(() => {
    startCountDown();
  }, [startCountDown]);
  return (
      <div >
         <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
         <h1 className="h1 mb-6">
        <span className="text-2xl sm:text-3xl font-semibold text-white text-center tracking-widest px-2">
          Presale goes Live In: 
        </span>
        </h1>
        </div>
        <div className="flex justify-center gap-3 sm:gap-8">
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
                {countDownTime?.days}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
            </div>
            <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
              {countDownTime?.days == 1 ? "Day" : "Days"}
            </span>
          </div>
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
                {countDownTime?.hours}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
            </div>
            <span className="text-[#8486A9] text-xs sm:text-2xl text-center font-medium">
              {countDownTime?.hours == 1 ? "Hour" : "Hours"}
            </span>
          </div>
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
                {countDownTime?.minutes}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
            </div>
            <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
              {countDownTime?.minutes == 1 ? "Minute" : "Minutes"}
            </span>
          </div>
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
                {countDownTime?.seconds}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
            </div>
            <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
              {countDownTime?.seconds == 1 ? "Second" : "Seconds"}
            </span>
          </div>
        </div>
      </div>
  );
};
export default Timer3;
