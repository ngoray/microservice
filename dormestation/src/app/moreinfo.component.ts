import { Component } from '@angular/core';

@Component({
  selector: 'app-moreinfo',
  template: `
  
<style>
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box;}

 .container {
    transition: 0.3s;
    float: left;
    width: 30%;
    padding: 20px;
    opacity: 0.4;
  }

  .container:hover {
    opacity: 1;
  }

  img {
    border-radius: 10%;
  }
</style>

<div class="container"  align="center"> 
<img src="https://dwxf316kii2pu.cloudfront.net/photos/ie_2646_247_9.jpg" height="250px" width="380px">

<div>
<h1>Spa</h1>

</div>

</div>

<div class="container"  align="center"> 
<img src="https://pbs.twimg.com/media/DNnsL7oX0AAEy-u.jpg" height="250px" width="380px">

<div>
<h1>Gym</h1>

</div>

</div>

<div class="container"  align="center"> 
<img src="https://www.grandhotel.com/wp-content/gallery/gardens/grand-hotel-mackinac-island-gardens-gallery-arbor-horses.jpg" height="250px" width="380px">

<div>
<h1>Garden</h1>

</div>

</div>

<div class="container"  align="center"> 
<img src="https://media-cdn.tripadvisor.com/media/photo-s/0f/10/6f/bb/early-morning-view-of.jpg" height="250px" width="380px">

<div>
<h1>Swimming pool</h1>

</div>
</div>

<div class="container"  align="center"> 
<img src="https://www.thegwenchicago.com/wp-content/uploads/2017/07/Dining.jpg" height="250px" width="380px">

<div>
<h1>Dining</h1>

</div>

</div>

<div class="container"  align="center"> 
<img src="https://www.gaia-hotels.com/imagebank/facilities1136_b.jpg" height="250px" width="380px">

<div>
<h1>Entertainment</h1>

</div>

</div>

`,
})
export class MoreinfoComponent  {
    
}