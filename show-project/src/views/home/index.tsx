/**
 *  author : bo.peng
 *  createTime 2018-11-23 12:48
 *  description : 首页
 */
import {Component, Vue, Watch} from 'vue-property-decorator';

@Component
export default class Home extends Vue {
    private data = 333;
    private getName() {
        console.log(1);
    }
    public render() {
        return (<div>Home</div>);
    }
}