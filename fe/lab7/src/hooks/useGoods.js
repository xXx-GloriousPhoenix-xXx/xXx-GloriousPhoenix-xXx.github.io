import { useState, useEffect } from "react"

const useGoods = () => {
    const [goodsPropList, setGoodsPropList] = useState([]);
    useEffect(() => {
        fetch('/data/goods.json')
          .then((response) => response.json())
          .then((data) => setGoodsPropList(data))
          .catch((error) => console.error('Ошибка загрузки JSON:', error));
    }, []);
    return goodsPropList;
}

export default useGoods;