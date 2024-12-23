{loading && (
  <div className="notification-loading-container">
    {/* Your loading content */}
    {
      Array.from({length:9}).map((_,index)=>{
        return <div key={index} className="notification-loading">

        </div>
      })
    }
  </div>
)}


and csss is
.notification-loading{
  width: 100%;
  height: 34px;
  animation: myanimation 0.6s linear infinite alternate;
  //alternate is used to start from where it left
  //0.6 denote the time or speed of animations
  margin-bottom: 20px;
  border-radius: 20px;

}
@keyframes myanimation {
  0%{
    background-color: rgb(242, 239, 239);  //light color in starting
  }
  100%{
    background-color: rgb(198, 192, 192);  //dark color at the end
  }
}
