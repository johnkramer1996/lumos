import { Loader } from 'components/ui'
import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useState } from 'react'

const Tabs = ({ items, isLoading = false, classPrefix = 'course-report' }, ref) => {
    const [itemsState, setItems] = useState({ items: [], indexActive: 0 })

    useEffect(() => setItems({ ...items }), [items])

    const events = useMemo(
        () => ({
            isAvaibleIndex: (index) => itemsState.items.find(({ isAvaible }, indexItems) => indexItems === index && isAvaible),
            setItemsByIndex: (indexActive) => setItems({ ...itemsState, indexActive }),
            nextItems: () => events.setItemsByIndex(itemsState.indexActive + 1 >= itemsState.items.length ? 0 : itemsState.indexActive + 1),
            changeTab: (index) => events.isAvaibleIndex(index) && events.setItemsByIndex(index),
            getItems: () => itemsState,
        }),
        [],
    )

    useImperativeHandle(ref, () => events)

    return (
        <>
            <div className={`${classPrefix}__nav`}>
                <div className={`${classPrefix}__tabs`}>
                    {itemsState.items.map(({ title }, index) => (
                        <div key={index} className={`${classPrefix}__tab${itemsState.indexActive === index ? ` ${classPrefix}__tab--active` : ''}`} onClick={() => events.changeTab(index)}>
                            {title}
                        </div>
                    ))}
                </div>
                <div className={`${classPrefix}__selects`}>
                    <select>
                        <option>За месяц</option>
                        <option>За месяц 2</option>
                    </select>
                </div>
            </div>
            {isLoading ? (
                <Loader />
            ) : (
                itemsState.items.map(({ component }, index) => (
                    <div key={index} className={`${classPrefix}__content${itemsState.indexActive === index ? ` ${classPrefix}__content--active` : ''}`}>
                        {component}
                    </div>
                ))
            )}
        </>
    )
}

export default forwardRef(Tabs)
