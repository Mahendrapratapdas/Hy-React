//Get the root element from the HTML file
const root = document.getElementById("root");

//Create heading <h1> tag using Recat build-in function which take 3 parameter (tag, attribute, children)
const Heading = React.createElement("h1",{id:"heading"},"Hy React")

//Create the React Root where react render the react node
const ReactRoot= ReactDOM.createRoot(root)

//Finally React Render the heading
//render function convert the obj into the HTML but the Heading is the obj.

// ReactRoot.render(Heading)

//Create the multiple children and siblings of a tag

const container = React.createElement("div",{id:"parent"},
    [React.createElement("h1", {id:"parentHeading"},"Parent Heading!"),
        React.createElement("div",{id:"child"},
            [React.createElement("h2",{id:"childHeading"}, "Child Heading"),
                React.createElement("p",{id:"childParagraph"}, "Child Paragraph")

            ]
        )
    ]
)

ReactRoot.render(container)