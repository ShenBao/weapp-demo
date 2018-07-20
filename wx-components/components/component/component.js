// components/component/component.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {

        // 子组件触发自定义事件
        eventTap() {

            // 所有要带到主页面的数据，都装在eventDetail里面
            let eventDetail = {
                time: Date.now(),
                name: 'test name',
            };
            
            // 触发事件的选项 bubbles是否冒泡，composed是否可穿越组件边界，capturePhase 是否有捕获阶段
            let eventOption = {
                composed: true,
            };

            this.triggerEvent('click_btn', eventDetail, eventOption);
        }

    }
})