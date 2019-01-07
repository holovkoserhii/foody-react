// REFS example

// import React, { Component, createRef } from 'react';

// export default class TestComponent extends Component {
//   playerRef = createRef();

//   handlePlay = () => this.playerRef.current.play();
//   handlePause = () => this.playerRef.current.pause();

//   render() {
//     return (
//       <div>
//         <video
//           src="http://techslides.com/demos/sample-videos/small.mp4"
//           ref={this.playerRef}
//         />
//         <div>
//           <button onClick={this.handlePlay}>Play</button>
//           <button onClick={this.handlePause}>Pause</button>
//         </div>
//       </div>
//     );
//   }
// }

// TOGGLE example

// import React, { Component } from 'react';

// export default class TestComponent extends Component {
//   state = { on: true };

//   toggle = () => {
//     this.setState(prevState => ({
//       on: !prevState.on,
//     }));
//   };

//   render() {
//     const { on } = this.state;
//     console.log(on);
//     return (
//       <div>
//         <button onClick={this.toggle}>{on ? 'Hide' : 'Show'}</button>
//         {on && <h1>I am visible</h1>}
//       </div>
//     );
//   }
// }

// ADD example

// import React, { Component } from 'react';

// export default class TestComponent extends Component {
//   static defaultProps = {
//     initialValue: 0,
//     step: 1,
//   };
//   state = { count: this.props.initialValue };

//   handleIncrement = evt => {
//     this.setState((prevState, props) => {
//       return { count: prevState.count + props.step };
//     });
//   };
//   render() {
//     const { count } = this.state;
//     return (
//       <div>
//         <h2>{count}</h2>
//         <button onClick={this.handleIncrement}>Add</button>
//       </div>
//     );
//   }
// }
