// Updated sample data with Study, Home Duties, and Sleep Time
const userData = [
    {
      title: 'Work',
      hours: {
        daily: 5,
        weekly: 32,
        monthly: 130,
      },
    },
    {
      title: 'Play',
      hours: {
        daily: 1,
        weekly: 10,
        monthly: 40,
      },
    },
    {
      title: 'Study',
      hours: {
        daily: 4,
        weekly: 20,
        monthly: 80,
      },
    },
    {
      title: 'Home Duties',
      hours: {
        daily: 10,
        weekly: 50,
        monthly: 200,
      },
    },
    {
      title: 'Sleep Time',
      hours: {
        daily: 8,
        weekly: 56,
        monthly: 224,
      },
    },
  ];
  
  // Add this at the beginning of your JavaScript code to get references to the buttons
  const dailyButton = document.getElementById('daily');
  const weeklyButton = document.getElementById('weekly');
  const monthlyButton = document.getElementById('monthly');
  
  // Function to create a task card
  function createTaskCard(task) {
    const { title, hours } = task;
  
    const card = document.createElement('div');
    card.classList.add('pannel-box', 'work'); // Use 'work' class for the "Work" card
    card.innerHTML = `
      <div class="box-content">
        <div class="_header-box">
          <h1>${title}</h1>
          <span><img src="icons/icon-elipsis.svg" alt=""></span>
        </div>
        <div class="_body-box">
          <p class="hrs">${hours.weekly}hrs</p>
          <p class="period">Last Weekly - ${hours.weekly}hrs</p>
        </div>
      </div>
    `;
  
    userPannel.appendChild(card);
  }
  
  // Function to handle button clicks and update the time period
  function handleButtonClick(timePeriod) {
    // Remove the 'active' class from all buttons
    dailyButton.classList.remove('active');
    weeklyButton.classList.remove('active');
    monthlyButton.classList.remove('active');
  
    // Add the 'active' class to the clicked button
    if (timePeriod === 'daily') {
      dailyButton.classList.add('active');
    } else if (timePeriod === 'weekly') {
      weeklyButton.classList.add('active');
    } else if (timePeriod === 'monthly') {
      monthlyButton.classList.add('active');
    }
  
    // Call the displayData function with the selected time period
    displayData(timePeriod);
  }
  
  // Add event listeners to the buttons
  dailyButton.addEventListener('click', () => {
    handleButtonClick('daily');
  });
  
  weeklyButton.addEventListener('click', () => {
    handleButtonClick('weekly');
  });
  
  monthlyButton.addEventListener('click', () => {
    handleButtonClick('monthly');
  });
  
  // Function to display data based on the selected time period
  function displayData(timePeriod) {
    userPannel.innerHTML = ''; // Clear previous data
  
    // Create cards for all activities based on the selected time period
    userData.forEach((item) => {
      const { title, hours } = item;
      let periodHours = 0;
  
      switch (timePeriod) {
        case 'daily':
          periodHours = hours.daily; // Use daily hours
          break;
        case 'weekly':
          periodHours = hours.weekly; // Use weekly hours
          break;
        case 'monthly':
          periodHours = hours.monthly; // Use monthly hours
          break;
        default:
          break;
      }
  
      createTaskCard({ title, hours: periodHours });
    });
  }
  
  // Initial data display (default to 'weekly' view)
  displayData('weekly');
  