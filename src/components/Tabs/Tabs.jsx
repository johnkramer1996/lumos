import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import PropTypes from 'prop-types'
import { Loader } from 'components/ui'

const Tabs = ({ items, isLoading = false, classPrefix = 'course-report', callbackHandler = () => {}, isAvaibleIndex = () => true }, ref) => {
    const [itemsState, setItems] = useState(items)
    const [activeIndex, setAtiveIndex] = useState(0)

    // useEffect(() => setItems([...items]), [items])

    const events = {
        setItemsByIndex: (activeIndex) => {
            setAtiveIndex(activeIndex)
            callbackHandler('changeIndex', activeIndex)
        },
        nextItems: () => events.setItemsByIndex(activeIndex + 1 >= itemsState.length ? 0 : activeIndex + 1),
        changeTab: (index) => isAvaibleIndex(index) && events.setItemsByIndex(index),
        getIndex: () => activeIndex,
    }

    useImperativeHandle(ref, () => events)

    return (
        <>
            <div className={`${classPrefix}__nav`}>
                <div className={`${classPrefix}__tabs`}>
                    {itemsState.map(({ title, notifications }, index) => (
                        <div
                            key={index}
                            className={`${classPrefix}__tab${activeIndex === index ? ` ${classPrefix}__tab--active` : ''} ${classPrefix}__tab${
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
                <div className={`${classPrefix}__content  ${classPrefix}__content--active`}>{itemsState[activeIndex].component}</div>
                // itemsState.items.map(({ component }, index) => (
                //     <div key={index} className={`${classPrefix}__content${itemsState.activeIndex === index ? ` ${classPrefix}__content--active` : ''}`}>
                //         {component}
                //     </div>
                // ))
            )}
        </>
    )
}

export default forwardRef(Tabs)
