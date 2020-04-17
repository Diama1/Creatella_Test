const getTimeInterval = (date) => {
    const currentDate = new Date();
    const currentTime = currentDate.getTime();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const timeDiff = Math.abs(currentTime - new Date(date).getTime());
    const time = new Date(Math.abs(currentDate.getTime() - timeDiff)).getTime();
    const timeString = new Date(time).toDateString();
  
    const MILLISECOND = 1000;
    const SECOND = 1 * MILLISECOND;
    const MINUTE = SECOND * 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;
    const WEEK = DAY * 7;
    const MONTH = DAY * new Date(currentYear, currentMonth + 1, 0).getDate();
  
    const seconds = Math.abs(
      new Date(currentTime).getSeconds() - new Date(time).getSeconds(),
    );
    const minutes = Math.abs(
      new Date(currentTime).getMinutes() - new Date(time).getMinutes(),
    );
    const hours = Math.abs(
      new Date(currentTime).getHours() - new Date(time).getHours(),
    );
    const days = Math.abs(
      new Date(currentTime).getDate() - new Date(time).getDate(),
    );
    const weeks = Math.floor(days / 7);
    const months = Math.abs(
      new Date(currentTime).getMonth() - new Date(time).getMonth(),
    );
    const years = Math.abs(
      new Date(currentTime).getFullYear() - new Date(time).getFullYear(),
    );
  
    if (timeDiff >= 0 && timeDiff < MINUTE) {
      return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
    }
    if (timeDiff >= MINUTE && timeDiff < HOUR) {
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    }
    if (timeDiff >= HOUR && timeDiff < DAY) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    }
    if (timeDiff >= DAY && timeDiff < WEEK) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    }
    if (timeDiff >= WEEK && timeDiff < MONTH) {
      return timeString;
    }
    if (timeDiff >= WEEK && timeDiff < MONTH) {
      return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    }
    if (
      timeDiff >= MONTH &&
      currentYear - new Date(time).getFullYear() === 1 &&
      currentMonth < new Date(time).getMonth()
    ) {
      return `${months} month${months > 1 ? 's' : ''} ago`;
    }
    return `${years} year${years > 1 ? 's' : ''} ago`;
  };
  
  export default getTimeInterval;
