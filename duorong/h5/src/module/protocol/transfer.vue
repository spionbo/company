/**
* 权益转让及受让协议
* Created by wangcuiqing on 2018/3/27.
*/
<style scoped>
 @import "./style/protocol.css";
</style>
<template>
    <div class='protocol'>
     <h1>权益转让及受让协议</h1>
      <div><p class="bh">编号：<span class="tip">{{map.agreementNo}}</span></p></div>
      <p>本权益转让及受让协议（下称“本协议”）由以下各方于<span style="padding: 0 5px;" class="tip">{{map.investTime}}</span>签署：</p>
      <p>甲方（转让人）：<span class="tip">{{map.intermediary}}</span></p>
      <p>身份证号：<span class="tip">{{map.intermediaryCard}}</span></p>
      <p>乙方（受让人）：<span class="tip" ng-bind="info.realName">{{map.realName}}</span></p>

      <table>
       <tr>
            <th width="30%">乙方（受让人）</th>
            <th width="40%">身份证号</th>
            <th width="30%">多融财富用户名</th>
       </tr>
       <tr>
          <td><span class="tip">{{map.realName}}</span></td>
          <td><span class="tip">{{map.idCard}}</span></td>
          <td><span class="tip">{{map.mobilephone}}</span></td>
       </tr>
      </table>

      <p>丙方（居间人）：上海银砖金融信息服务有限公司</p>
      <p>甲、乙、丙三方就甲方通过丙方在多融财富网站www.duorongcf.com （下称“多融财富平台”，指上海银砖金融信息服务有限公司及多融财富网站的统称）的居间服务，向乙方转让债权权益事宜，经协商一致，达成如下协议：</p>

      <h1>第一条 转让标的与流程</h1>
      <p><b>1.1 </b>权益转让标的</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;甲方同意将其拥有的个人债权所形成的本息权益（详见下表，下称“权益标的”）转让给乙方，乙方同意受让该权益。</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;待转让权益标的信息：</p>
      <table>
       <tr>
        <td width="20%">转让人姓名</td>
        <td width="20%"><span class="tip">{{map.intermediary}}</span></td>
       </tr>
       <tr>
        <td>转让人身份证号</td>
        <td><span class="tip">{{map.intermediaryCard}}</span></td>
       </tr>
       <tr>
        <td>权益对应本金金额</td>
        <td><span class="tip">{{map.investAmount}}</span></td>
       </tr>
       <tr>
        <td>收益率</td>
        <td><span class="tip"><i>{{map.rate}}</i>%</span></td>
       </tr>
       <tr>
        <td>产品类型</td>
        <td>

         <span class="tip"><i>{{map.productName}}</i>（<i>{{map.deadline}}</i>天）</span>
        </td>
       </tr>
       <tr>
        <td>权益转让生效日</td>
        <td><span class="tip">{{map.date}}</span></td>
       </tr>
      </table>
      <p><b>1.2 </b>转让流程</p>
      <p><b>1.2.1 </b>甲乙双方同意并确认，双方通过自行或授权有关方根据多融财富平台相关的规则和说明，在多融财富平台进行权益标的转让和受让购买操作等方式来确认签署本协议。</p>
      <p><b>1.2.2 </b>甲乙双方同意，本协议通过多融财富平台审核通过时，本协议成立，在乙方转让价款支付完成时生效。协议成立的同时，甲方不可撤销地授权多融财富平台委托第三方支付平台将权益标的转让价款在扣除甲方应支付多融财富平台的相关款项后（包括但不限于转让管理费）划转给甲方，上述权益标的转让价款划转完成即视为本协议生效且权益标的转让成功。</p>
      <p><b>1.2.3 </b>本协议生效且权益标的转让成功后，甲乙双方特此委托丙方通过多融财富平台以其名义将权益标的转让事项及有关信息通过站内短信、电话、书面等形式通知权益标的对应的借款人。</p>
      <p><b>1.2.4 </b>自权益标的转让成功之日起，乙方成为权益标的权利人，享有该权益所对应的本金和全部收益。</p>

      <h2>第二条 保证与承诺</h2>
      <p><b>2.1 </b>甲方保证其转让的权益标的系合法、有效的权利，不存在转让的限制。甲方同意并承诺，按有关协议及多融财富平台的相关规则向多融财富平台支付权益转让管理费。</p>
      <p><b>2.2 </b>乙方保证其所用于受让权益标的资金来源合法，乙方是该资金的合法所有人。如果第三方对资金归属、合法性问题发生争议，乙方应自行负责解决并承担相关责任。</p>

      <h2>第三条 违约责任</h2>
      <p><b>3.1 </b>甲乙双方同意，如果一方违反其在本协议中所作的保证、承诺或任何其他义务，致使其他方遭受或发生损害、损失等责任，违约方须向守约方赔偿守约方因此遭受的一切经济损失。</p>
      <p><b>3.2 </b>甲乙双方均有过错的，应根据双方实际过错程度，分别承担各自的违约责任。</p>

      <h2>第四条 适用法律和争议解决</h2>
      <p><b>4.1 </b>本协议的订立、效力、解释、履行、修改和终止以及争议的解决适用中国的法律。</p>
      <p><b>4.2 </b>本协议在履行过程中，如发生任何争执或纠纷，各方应友好协商解决；若协商不成，任何一方均有权向有管辖权的人民法院提起诉讼。</p>

      <h2>第五条 其他</h2>
      <p><b>5.1 </b>本协议采用电子文本形式制成，甲方和乙方在多融财富注册且通过多融财富平台权益转让即视为同意本协议全部内容。甲、乙方同意，本协议通过多融财富平台审核通过时，本协议成立,在权益标的转让价款支付完成时生效。各方均认可该形式的协议效力及本协议内容。各方委托多融财富平台保管所有与本协议有关的书面文件和电子信息。各方确认多融财富平台提供的与本协议有关的书面文件和电子信息在无与本协议明显冲突及错误情况下，应作为本协议有关事项的终局证明。</p>
      <p><b>5.2 </b>甲、乙方均同意并确认，甲、乙方通过多融财富平台账户和其银行账户的行为均通过第三方支付平台或银行进行，所产生的法律效果及法律责任归属于甲、乙方。同时，甲、乙方委托多融财富平台根据本协议采取的全部行动和措施的法律后果均归属于甲、乙方，多融财富平台不因此承担责任。</p>
      <p><b>5.3 </b>如果本协议中的任何一条或多条违反适用的法律法规，则该条将被视为无效，但该无效条款并不影响本协议其他条款的效力。</p>
      <p><b>5.4 </b>本协议项下的附件和补充协议构成本协议不可分割的一部分，本协议项下无约定的事项以多融财富平台公布的相关规则为准。</p>

      <h1>乙方声明：对于本协议条款，多融财富平台已应乙方要求进行充分解释及说明，乙方对本协议内容及相应风险已完全知悉并理解。</h1>
        <table>
         <tr>
            <th>甲方：</th>
            <th>乙方：</th>
            <th>丙方：</th>
         </tr>
         <tr>
          <td><span class="tip">{{map.intermediary}}</span></td>
          <td><span class="tip">{{map.realName}}</span></td>
          <td>上海银砖金融信息服务有限公司</td>
         </tr>
        </table>
      </div>
</template>
<script>
 import {product} from "./js/protocol.js";
 export default {
      data(){
       return{
        map:"",
       }
      },
      mounted(){
          this.setTitle({
              show : true,
              title : "权益转让及受让协议",
              back : true,
          });
          let self=this;
          self.ajax({
           type:"get",
           url:product,
           data:{
               pid:"1517",
               uid:"2113",
               investId:"7960"
           },
           dataType:"jsonp",
           jsonp:'callback',
           success:function(data){
            self.map=data.map;
           }
          })
      },
      methods(){

      }
 }
</script>
