// import './nav.css';

// function Navbar (){
//     return (

//   <div>
//     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
//     <link rel="stylesheet" href="mega-menu.css" />
//     <div classname="navbar navbar-default navbar-static-top">
//       <div classname="container">
//         <div classname="navbar-header">
//           <button type="button" classname="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
//             <span classname="icon-bar">
//               <span classname="icon-bar">
//                 <span classname="icon-bar">
//                 </span></span></span></button>
//           <a classname="navbar-brand" href="#"><img alt="Logo" src="https://www.solodev.com/assets/side-nav/logo.png" /></a>
//         </div>
//         <div classname="navbar-collapse collapse">
//           <ul classname="nav navbar-nav">
//             <li><a href="#">Home</a></li>
//             <li classname="dropdown menu-large">
//               <a href="#" classname="dropdown-toggle" data-toggle="dropdown"> Products <b classname="caret"> </b></a><b classname="caret">
//                 <ul classname="dropdown-menu megamenu row">
//                   <li>
//                     <div classname="col-sm-6 col-md-3">
//                       <a href="#" classname="thumbnail">
//                         <img src="http://placehold.it/150x120" />
//                       </a>
//                     </div>
//                     <div classname="col-sm-6 col-md-3">
//                       <a href="#" classname="thumbnail">
//                         <img src="http://placehold.it/150x120" />
//                       </a>
//                     </div>
//                     <div classname="col-sm-6 col-md-3">
//                       <a href="#" classname="thumbnail">
//                         <img src="http://placehold.it/150x120" />
//                       </a>
//                     </div>
//                     <div classname="col-sm-6 col-md-3">
//                       <a href="#" classname="thumbnail">
//                         <img src="http://placehold.it/150x120" />
//                       </a>
//                     </div>
//                     <div classname="col-sm-6 col-md-3">
//                       <a href="#" classname="thumbnail">
//                         <img src="http://placehold.it/150x120" />
//                       </a>
//                     </div>
//                     <div classname="col-sm-6 col-md-3">
//                       <a href="#" classname="thumbnail">
//                         <img src="http://placehold.it/150x120" />
//                       </a>
//                     </div>
//                     <div classname="col-sm-6 col-md-3">
//                       <a href="#" classname="thumbnail">
//                         <img src="http://placehold.it/150x120" />
//                       </a>
//                     </div>
//                     <div classname="col-sm-6 col-md-3">
//                       <a href="#" classname="thumbnail">
//                         <img src="http://placehold.it/150x120" />
//                       </a>
//                     </div>
//                   </li>
//                 </ul>
//               </b></li><b classname="caret">
//               <li classname="dropdown menu-large">
//                 <a href="#" classname="dropdown-toggle" data-toggle="dropdown">Categories <b classname="caret" /></a><b classname="caret">
//                   <ul classname="dropdown-menu megamenu row">
//                     <li classname="col-sm-3">
//                       <ul>
//                         <li classname="dropdown-header">Software</li>
//                         <li><a href="#">Desktop</a></li>
//                         <li classname="disabled"><a href="#">Mobile</a></li>
//                         <li><a href="#">Tablet</a></li>
//                         <li classname="divider">
//                         </li><li classname="dropdown-header">Hardware</li>
//                         <li><a href="#">Arduino</a></li>
//                         <li><a href="#">Raspberry PI</a></li>
//                         <li><a href="#">VoCore</a></li>
//                         <li><a href="#">Banana PI</a></li>
//                       </ul>
//                     </li>
//                     <li classname="col-sm-3">
//                       <ul>
//                         <li classname="dropdown-header">Nano-Tech</li>
//                         <li><a href="#">AFM</a></li>
//                         <li><a href="#">STM</a></li>
//                         <li><a href="#">Nano-Tubes</a></li>
//                         <li><a href="#">Nano-Wires</a></li>
//                         <li><a href="#">Materials</a></li>
//                         <li classname="divider">
//                         </li><li classname="dropdown-header">A.I.</li>
//                         <li><a href="#">Artificial Intelligence</a></li>
//                       </ul>
//                     </li>
//                     <li classname="col-sm-3">
//                       <ul>
//                         <li classname="dropdown-header">SaaS</li>
//                         <li><a href="#">On-Demand</a></li>
//                         <li><a href="#">No Software</a></li>
//                         <li><a href="#">Cloud Computing</a></li>
//                         <li classname="divider">
//                         </li><li classname="dropdown-header">On-Premise</li>
//                         <li><a href="#">Data Center</a></li>
//                         <li><a href="#">Hosting Environment</a></li>
//                         <li><a href="#">Internal IT</a></li>
//                       </ul>
//                     </li>
//                     <li classname="col-sm-3">
//                       <ul>
//                         <li classname="dropdown-header">Server-Side</li>
//                         <li><a href="#">PHP</a></li>
//                         <li><a href="#">Java</a></li>
//                         <li><a href="#">Python</a></li>
//                         <li><a href="#">Ruby</a></li>
//                         <li><a href="#">ColdFusion</a></li>
//                         <li><a href="#">ASP.NET</a></li>
//                         <li><a href="#">GO</a></li>
//                         <li><a href="#">Perl</a></li>
//                         <li><a href="#">Lasso</a></li>
//                       </ul>
//                     </li>
//                   </ul>
//                 </b></li><b classname="caret">
//                 <li classname="dropdown menu-large">
//                   <a href="#" classname="dropdown-toggle" data-toggle="dropdown">Services <b classname="caret" /></a><b classname="caret">
//                     <ul classname="dropdown-menu megamenu row">
//                       <li classname="col-sm-3">
//                         <ul>
//                           <li classname="dropdown-header">Web Design</li>
//                           <li><a href="#">HTML5</a></li>
//                           <li classname="disabled"><a href="#">CSS</a></li>
//                           <li><a href="#">JavaScript</a></li>
//                           <li classname="divider">
//                           </li><li classname="dropdown-header">Web Development</li>
//                           <li><a href="#">Websites</a></li>
//                           <li><a href="#">Mobile Apps</a></li>
//                           <li><a href="#">Responsive</a></li>
//                           <li><a href="#">Web Apps</a></li>
//                         </ul>
//                       </li>
//                       <li classname="col-sm-3">
//                         <ul>
//                           <li classname="dropdown-header">Graphic Design</li>
//                           <li><a href="#">PSD</a></li>
//                           <li><a href="#">Images</a></li>
//                           <li><a href="#">Logos</a></li>
//                           <li><a href="#" /></li><a href="#">
//                           </a><li><a href="#" /><a href="#">Vertical variation</a></li>
//                           <li classname="divider">
//                           </li><li classname="dropdown-header">Database Design</li>
//                           <li><a href="#">Single button dropdowns</a></li>
//                         </ul>
//                       </li>
//                       <li classname="col-sm-3">
//                         <ul>
//                           <li classname="dropdown-header">UI/UX Design</li>
//                           <li><a href="#">User Interface</a></li>
//                           <li><a href="#">User Experience</a></li>
//                           <li><a href="#">Web Designers</a></li>
//                           <li classname="divider">
//                           </li><li classname="dropdown-header">Digital Marketing</li>
//                           <li><a href="#">Paid</a></li>
//                           <li><a href="#">Social</a></li>
//                           <li><a href="#">Content Marketing</a></li>
//                         </ul>
//                       </li>
//                       <li classname="col-sm-3">
//                         <ul>
//                           <li classname="dropdown-header">Project Management</li>
//                           <li><a href="#">Initiating</a></li>
//                           <li><a href="#">Planning</a></li>
//                           <li><a href="#">Executing</a></li>
//                           <li><a href="#">Monitoring</a></li>
//                           <li><a href="#">Controlling</a></li>
//                           <li><a href="#">Closing</a></li>
//                           <li><a href="#">PM Systems</a></li>
//                           <li><a href="#">Best Practices</a></li>
//                           <li><a href="#">Project Manager</a></li>
//                         </ul>
//                       </li>

// )
//     }
//       export default Navbar
