//Get the root element from the HTML file
const root = document.getElementById("root");

//Create heading <h1> tag using Recat build-in function which take 3 parameter (tag, attribute, children)
const Heading = React.createElement("h1",{id:"heading"},"Hy React")

//Create the React Root where react render the react node
const ReactRoot= ReactDOM.createRoot(root)

//Finally React Render the heading
//render function convert the obj into the HTML but the Heading is the obj.
ReactRoot.render(Heading)