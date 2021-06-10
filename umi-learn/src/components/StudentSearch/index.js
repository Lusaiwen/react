import React, { useState, useEffect } from 'react';
import './index.css';

export default function StudentSearch(props) {
    const [search, setSearch] = useState('');
    const [sex, setSex] = useState(-1);
    console.log(props);

    useEffect(() => {
        props.keys && setSearch(props.keys);
        props.sex && setSex(props.sex);
        return () => {};
    }, [props]);

    function handleChangeSex(e) {
        setSex(+e.target.value);
    }

    function handleSearch() {
        props.onSearch &&
            props.onSearch({
                key: search,
                sex
            });
    }

    function handleChangeKey(e) {
        console.log(e.target.value);
        setSearch(e.target.value);
    }
    return (
        <div>
            <label>
                请输入关键字：
                <input type="text" value={search} onChange={handleChangeKey} />
            </label>
            <label>
                不限
                <input
                    type="radio"
                    checked={sex === -1}
                    name="sex"
                    value={-1}
                    onChange={handleChangeSex}
                />
            </label>
            <label>
                男
                <input
                    type="radio"
                    checked={sex === 0}
                    name="sex"
                    value={0}
                    onChange={handleChangeSex}
                />
            </label>
            <label>
                女
                <input
                    type="radio"
                    checked={sex === 1}
                    name="sex"
                    value={1}
                    onChange={handleChangeSex}
                />
            </label>
            <label>
                <button onClick={handleSearch}>查询</button>
            </label>
        </div>
    );
}
