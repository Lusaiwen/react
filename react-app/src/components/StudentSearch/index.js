import React, { useState, useEffect } from 'react';
import './index.css';

export default function StudentSearch(props) {
    const [search, setSearch] = useState('');
    const [sex, setSex] = useState(-1);
    console.log(props);

    useEffect(() => {
        props.search && setSearch(props.search);
        props.sex && setSex(props.sex);
        return () => {};
    }, [props]);

    function handleChange(e) {
        setSex(+e.target.value);
    }

    function handleSearch(e) {
        setSearch(e.target.value);
        const value = e.target.value;
        props.onSearch &&
            props.onSearch({
                search: value,
                sex: sex
            });
    }

    return (
        <div>
            <label>
                请输入关键字：
                <input type="text" value={search} onChange={handleSearch} />
            </label>
            <label>
                不限
                <input
                    type="radio"
                    checked={sex === -1}
                    name="sex"
                    value={-1}
                    onChange={handleChange}
                />
            </label>
            <label>
                男
                <input
                    type="radio"
                    checked={sex === 0}
                    name="sex"
                    value={0}
                    onChange={handleChange}
                />
            </label>
            <label>
                女
                <input
                    type="radio"
                    checked={sex === 1}
                    name="sex"
                    value={1}
                    onChange={handleChange}
                />
            </label>
        </div>
    );
}
