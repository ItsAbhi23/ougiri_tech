import EventContext from './EventContext'
const EventState = (props) => {

    const event = [
        { Name: "Name 1", text: "enter you text here" }, { Name: "Name 2", text: "enter you text here" }, { Name: "Name 3", text: "enter you text here" }, { Name: "Name 4", text: "enter you text here" }, { Name: "Name 5", text: "enter you text here" }
        , { Name: "Name 6", text: "enter you text here" }, { Name: "Name 7", text: "enter you text here" }, { Name: "Name 8", text: "enter you text here" }, { Name: "Name 9", text: "enter you text here" }, { Name: "Name 10", text: "enter you text here" }
        , { Name: "Name 11", text: "enter you text here" }, { Name: "Name 12", text: "enter you text here" }, { Name: "Name 13", text: "enter you text here" }, { Name: "Name 14", text: "enter you text here" }, { Name: "Name 15", text: "enter you text here" }
        , { Name: "Name 16", text: "enter you text here" }, { Name: "Name 17", text: "enter you text here" }
    ]

    return (
        <EventContext.Provider value={event}>
            {props.children}
        </EventContext.Provider>
    )
}
export default EventState;