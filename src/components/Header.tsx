// StateLess Component
function Header() {
  return (
    <div>
      <div className='header'>
        <div className='time-stemp'>
          <div className='date-stemp'>
            <div className='date'>
              <p>12</p>
            </div>
            <div className='month-year'>
              <p className='month'>JAN</p>
              <p className='year'>2016</p>
            </div>
          </div>
          <div className='day'>
            <p>Tuesday</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
