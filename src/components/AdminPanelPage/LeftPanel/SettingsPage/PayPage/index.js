import React from 'react'

import BackgroundChanger from '../common/BackgroundChanger/index'
import SizeChanger from '../common/NumberChanger/index'
import PayPageConfig from './config/PayPageConfig'
import NumberChanger from "../common/NumberChanger";
import TextChanger from "../common/TextChanger";

import cn from '../../../../../utils/cn'

import './style.css';

export default (props) => {
    return <div className={cn('components-LeftPanel-SettingPage-PayPage-root', props.className)}>
        {PayPageConfig.pageName}
        <BackgroundChanger
            title="Background:"
            pathConfig={PayPageConfig.background.background}
            data={props.pageConfig.background.style.background}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Телефон

        <NumberChanger
            title="Position left:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.telephone.left}
            data={props.pageConfig.leftPanel.telephone.style.left}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Position top:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.telephone.top}
            data={props.pageConfig.leftPanel.telephone.style.top}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Заголовок (телефон)

        <TextChanger
            title="Title text:"
            pathConfig={PayPageConfig.leftPanel.telephone.title.text}
            data={props.pageConfig.leftPanel.telephone.title.text}
            onChange={props.onChange}
        />
        <BackgroundChanger
            title="Text color:"
            pathConfig={PayPageConfig.leftPanel.telephone.title.color}
            data={props.pageConfig.leftPanel.telephone.title.style.color}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Font size:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.telephone.title.fontSize}
            data={props.pageConfig.leftPanel.telephone.title.style.fontSize}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Поле ввода (телефон)

        <BackgroundChanger
            title="Background:"
            pathConfig={PayPageConfig.leftPanel.telephone.input.background}
            data={props.pageConfig.leftPanel.telephone.input.style.background}
            onChange={props.onChange}
        />
        <TextChanger
            title="Placeholder:"
            pathConfig={PayPageConfig.leftPanel.telephone.input.placeholder}
            data={props.pageConfig.leftPanel.telephone.input.placeholder}
            onChange={props.onChange}
        />
        <BackgroundChanger
            title="Text color:"
            pathConfig={PayPageConfig.leftPanel.telephone.input.color}
            data={props.pageConfig.leftPanel.telephone.input.style.color}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Font size:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.telephone.input.fontSize}
            data={props.pageConfig.leftPanel.telephone.input.style.fontSize}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Input border radius:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.telephone.input.borderRadius}
            data={props.pageConfig.leftPanel.telephone.input.style.borderRadius}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Input border width:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.telephone.input.borderWidth}
            data={props.pageConfig.leftPanel.telephone.input.style.borderWidth}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Input width:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.telephone.input.width}
            data={props.pageConfig.leftPanel.telephone.input.style.width}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Input height:"
            minValue={0}
            pathConfig={PayPageConfig.leftPanel.telephone.input.height}
            data={props.pageConfig.leftPanel.telephone.input.style.height}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Карточка оплаты

        <BackgroundChanger
            title="Background:"
            pathConfig={PayPageConfig.rightPanel.background}
            data={props.pageConfig.rightPanel.style.background}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Сумма заказа

        <BackgroundChanger
            title="Order text color:"
            pathConfig={PayPageConfig.rightPanel.textContainer.order.color}
            data={props.pageConfig.rightPanel.textContainer.order.style.color}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Order font size:"
            minValue={0}
            pathConfig={PayPageConfig.rightPanel.textContainer.order.fontSize}
            data={props.pageConfig.rightPanel.textContainer.order.style.fontSize}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Стоймость доставки

        <BackgroundChanger
            title="Delivery text color:"
            pathConfig={PayPageConfig.rightPanel.textContainer.delivery.color}
            data={props.pageConfig.rightPanel.textContainer.delivery.style.color}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Delivery font size:"
            minValue={0}
            pathConfig={PayPageConfig.rightPanel.textContainer.delivery.fontSize}
            data={props.pageConfig.rightPanel.textContainer.delivery.style.fontSize}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Общая стоймость заказа

        <BackgroundChanger
            title="Result text color:"
            pathConfig={PayPageConfig.rightPanel.textContainer.result.color}
            data={props.pageConfig.rightPanel.textContainer.result.style.color}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Result font size:"
            minValue={0}
            pathConfig={PayPageConfig.rightPanel.textContainer.result.fontSize}
            data={props.pageConfig.rightPanel.textContainer.result.style.fontSize}
            onChange={props.onChange}
        />

        <div style={props.hrStyle}/>

        Кнопка оформления заказа

        <BackgroundChanger
            title="Background:"
            pathConfig={PayPageConfig.rightPanel.buttonOK.background}
            data={props.pageConfig.rightPanel.buttonOK.style.background}
            onChange={props.onChange}
        />
        <TextChanger
            title="Button text:"
            pathConfig={PayPageConfig.rightPanel.buttonOK.text}
            data={props.pageConfig.rightPanel.buttonOK.text}
            onChange={props.onChange}
        />
        <BackgroundChanger
            title="Text color:"
            pathConfig={PayPageConfig.rightPanel.buttonOK.color}
            data={props.pageConfig.rightPanel.buttonOK.style.color}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Font size:"
            minValue={0}
            pathConfig={PayPageConfig.rightPanel.buttonOK.fontSize}
            data={props.pageConfig.rightPanel.buttonOK.style.fontSize}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button border width:"
            minValue={0}
            pathConfig={PayPageConfig.rightPanel.buttonOK.borderWidth}
            data={props.pageConfig.rightPanel.buttonOK.style.borderWidth}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button border radius:"
            minValue={0}
            pathConfig={PayPageConfig.rightPanel.buttonOK.borderRadius}
            data={props.pageConfig.rightPanel.buttonOK.style.borderRadius}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button width:"
            minValue={0}
            maxValue={290}
            pathConfig={PayPageConfig.rightPanel.buttonOK.width}
            data={props.pageConfig.rightPanel.buttonOK.style.width}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button height:"
            minValue={0}
            pathConfig={PayPageConfig.rightPanel.buttonOK.height}
            data={props.pageConfig.rightPanel.buttonOK.style.height}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button position left:"
            minValue={0}
            pathConfig={PayPageConfig.rightPanel.buttonOK.left}
            data={props.pageConfig.rightPanel.buttonOK.style.left}
            onChange={props.onChange}
        />
        <NumberChanger
            title="Button position top:"
            minValue={0}
            pathConfig={PayPageConfig.rightPanel.buttonOK.top}
            data={props.pageConfig.rightPanel.buttonOK.style.top}
            onChange={props.onChange}
        />

    </div>
};
