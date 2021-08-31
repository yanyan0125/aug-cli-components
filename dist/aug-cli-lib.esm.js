import { computed, defineComponent, openBlock, createBlock, resolveDynamicComponent, normalizeStyle, withCtx, createTextVNode, toDisplayString } from 'vue';
import { without, mapValues, pick } from 'lodash-es';

const commonDefaultProps = {
    // actions
    actionType: '',
    url: '',
    // size
    height: '',
    width: '373px',
    paddingLeft: '0px',
    paddingRight: '0px',
    paddingTop: '0px',
    paddingBottom: '0px',
    // border type
    borderStyle: 'none',
    borderColor: '#000',
    borderWidth: '0',
    borderRadius: '0',
    // shadow and opacity
    boxShadow: '0 0 0 #000000',
    opacity: '1',
    // position and x,y
    position: 'absolute',
    left: '0',
    top: '0',
    right: '0'
};
const textDefaultProps = {
    // basic props - font styles
    text: '正文内容',
    fontSize: '14px',
    fontFamily: '',
    fontWeight: 'normal',
    fontStyle: 'normal',
    textDecoration: 'none',
    lineHeight: '1',
    textAlign: 'left',
    color: '#000000',
    backgroundColor: '',
    ...commonDefaultProps
};
const imageDefaultProps = {
    src: 'test.url',
    ...commonDefaultProps
};
const textStylePropNames = without(Object.keys(textDefaultProps), 'actionType', 'url', 'text');
without(Object.keys(imageDefaultProps), 'src');
const transformToComponentProps = (props) => {
    return mapValues(props, (item) => {
        return {
            type: item.constructor,
            default: item
        };
    });
};

const useComponentCommon = (props, picks) => {
    const styleProps = computed(() => pick(props, picks));
    const handleClick = () => {
        if (props.actionType === 'url' && props.url) {
            window.location.href = props.url;
        }
    };
    return {
        styleProps,
        handleClick
    };
};

const defaultProps = transformToComponentProps(textDefaultProps);
var script = defineComponent({
    name: "l-text",
    props: {
        // text: {
        //   type: String
        // },
        // fontSize: {
        //   type: String
        // },
        tag: {
            type: String,
            default: "div"
        },
        ...defaultProps
    },
    setup(props) {
        const { styleProps, handleClick } = useComponentCommon(props, textStylePropNames);
        return {
            styleProps,
            handleClick
        };
    }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
    style: normalizeStyle(_ctx.styleProps),
    onClick: _ctx.handleClick,
    class: "l-text-component"
  }, {
    default: withCtx(() => [
      createTextVNode(toDisplayString(_ctx.text), 1 /* TEXT */)
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["style", "onClick"]))
}

script.render = render;
script.__scopeId = "data-v-6bf95b7a";
script.__file = "src/components/LText/LText.vue";

// vue组件本身就是一个Object
script.install = (app) => {
    app.component(script.name, script);
};

const components = [
    script
];
const install = (app) => {
    components.forEach(component => {
        app.component(component.name, component);
    });
};
// 默认的全局导入
var index = {
    install
};

export { script as LText, index as default, install };
