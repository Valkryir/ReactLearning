export default function App() {

    const boards = [
            {
                'title' : "todo",
                'cards' : [
                    {
                        'title' : "Card One",
                        'description' : 'Do the thing'
                    },
                    {
                        'title' : "Card Two",
                        'description' : 'Test the thing'
                    },
                    {
                        'title' : "Card Three",
                        'description' : 'Release the thing'
                    }
                ]
            },
            {
                'title' : "in progress",
                'cards' : [
                    {
                        'title' : "Card Four",
                        'description' : 'Plan the thing'
                    },
                    {
                        'title' : "Card Five",
                        'description' : 'Plan some more of the thing'
                    }
                ]
            },
            {
                'title' : "complete",
                'cards' : []
            }
    ];

    const listItems = boards.map(board => <Board title={board.title} cards={board.cards} />)

  return (
    <div className="h-dvh bg-sand w-screen text-rich-black">
        <div className="text-5xl p-4">
            Kanban Board
        </div>
        <div className="grid grid-cols-3 gap-5 p-5">
            {listItems}
        </div>
    </div>
  );
}

function Board({title, cards}) {

    console.log(cards)

    const listItems = cards.map(card => <TaskCard title={card.title} description={card.description} />);

    return (
        <div className="h-auto flex flex-col items-center p-4 bg-platinum rounded-md shadow-lg gap-2">
            <div className="text-2xl">{title}</div>
            <div>
                {listItems}
            </div>
            <div className="bg-asparagus w-1/2 rounded-md text-white px-2 py-1 text-center">
                Add New
            </div>
        </div>
    )
}

function TaskCard({title, description}) {
    return (
        <div className="bg-sand rounded-md p-4 m-2 flex flex-col items-left shadow-md">
            <div className="text-l">
                {title}
            </div>
            <div className="text-sm">
                {description}
            </div>
        </div>
    )
}

function AddCard() {
    return (
        <div>

        </div>
    )
}