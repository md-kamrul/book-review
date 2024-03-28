import { useEffect } from "react";
import { useState } from "react";
import { getStoredList } from "../../utility/getStoredList";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

export default function App() {

    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('../../../public/books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, []);

    const readBooks = getStoredList("readLists");
    let readBooksList = [];
    books.forEach(element => {
        readBooks.forEach(readBook => {
            if (element.bookId == readBook) {
                readBooksList.push(element)
            }
        });
    });

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const data = readBooksList;
    console.log(data);

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <BarChart className="mt-[10%] mx-[10%] bg-base-200 p-5 rounded-2xl"
            width={700}
            height={300}
            data={data}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="bookName" />
            <YAxis />
            <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
            </Bar>
        </BarChart>
    );
}
