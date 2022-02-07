import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import PropTypes from 'prop-types'
import { Loader } from 'components/ui'

const Tabs = ({ items, isLoading = false, classPrefix = 'course-report', callbackHandler = () => {} }, ref) => {
    const [itemsState, setItems] = useState(items)

    useEffect(() => setItems({ ...items }), [items])

    const events = {
        isAvaibleIndex: (index) => itemsState.items.find(({ isAvaible }, indexItems) => indexItems === index && isAvaible),
        setItemsByIndex: (indexActive) => {
            const newItems = { items: [...itemsState.items.map((i, index) => ({ ...i, isAvaible: i.isAvaible ? true : index <= indexActive }))], indexActive }
            callbackHandler('changeTab', newItems)
            setItems(newItems)
        },
        nextItems: () => events.setItemsByIndex(itemsState.indexActive + 1 >= itemsState.items.length ? 0 : itemsState.indexActive + 1),
        changeTab: (index) => events.isAvaibleIndex(index) && events.setItemsByIndex(index),
        getItems: () => itemsState,
    }

    useImperativeHandle(ref, () => events)

    return (
        <>
            <div className={`${classPrefix}__nav`}>
                <div className={`${classPrefix}__tabs`}>
                    {itemsState.items.map(({ title, notifications }, index) => (
                        <div
                            key={index}
                            className={`${classPrefix}__tab${itemsState.indexActive === index ? ` ${classPrefix}__tab--active` : ''} ${classPrefix}__tab${
                                notifications ? ` ${classPrefix}__tab--notification` : ''
                            }`}
                            onClick={() => events.changeTab(index)}
                        >
                            {title}
                            <i>{notifications ? notifications : ''}</i>
                        </div>
                    ))}
                </div>
                {/* <div className={`${classPrefix}__selects`}>
                    <select>
                        <option>За месяц</option>
                        <option>За месяц 2</option>
                    </select>
                </div> */}
            </div>
            {isLoading ? (
                <Loader />
            ) : (
                <div className={`${classPrefix}__content  ${classPrefix}__content--active`}>{itemsState.items[itemsState.indexActive].component}</div>
                // itemsState.items.map(({ component }, index) => (
                //     <div key={index} className={`${classPrefix}__content${itemsState.indexActive === index ? ` ${classPrefix}__content--active` : ''}`}>
                //         {component}
                //     </div>
                // ))
            )}
        </>
    )
}

export default forwardRef(Tabs)
