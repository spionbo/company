<style scoped>
	@import '../../css/global.css';
	@import '../../css/index.css';
</style>
<script>
	import about from './../html/about.vue';
	import reg from './../reg/reg.vue';
	import {sendAward} from '../../common/URL.js';
	export default {
	    data(){
	    	return{
			  	phone:'',
			  	getThis :true,
	    	}
	  	},
	  	components : {
            about,
            reg,
        },
	  	mounted(){
	  		T.setImgSize();
	  		this.phone = this.$route.query.phone;
	  	},
	  	methods:{
	  		toBill: function(){
	  			var userphone =  this.$route.query.phone;
	  			if(this.getThis){
	  				this.getThis = false;
		  			T.ajax({ 
		                url : sendAward , 
		                data : {
		                    uid:T.uid
		                },
		                callback:true,
		                success : function( _data ){
		                	if(_data.success){
                                if (window._taq) {
                                    _taq.push({convert_id:"1604400954848307", event_type:"form"});
                                }
								router.replace({ 
		                            path: 'billOK',
		                            query: { phone: userphone , toFrom: T.toFrom }
		                        })
		                	}
		                }
		            });
	  			}
	  		}
	  	}
	}
</script>
<template>
<div>
	<div class="banntitle img-size" data-paddingTop='30'  data-paddingBottom='30'>
	    <div class="title img-size" data-width="475" data-height="61">
			<p class="prti"><span class="titlebga img-size" data-width="246" data-height="30" data-marginTop="10"></span></p>
		</div>
	</div>
	<!--<div class="hl hl1 img-size" data-paddingTop="2" style="height:auto;">-->
	<div class="hl hl1 img-size" data-paddingTop="2" data-height="1334">
	    <div class="success regi img-size" data-marginTop="39" data-fontSize='36' data-lineHeight="58" style="text-align:center;">
	    	<span>当前账户：</span><span>{{phone}}</span>
    	</div>
	    <div class="box">
			<div class="register img-size" data-width="570" data-marginTop="30" data-paddingBottom="25" data-borderTopLeftRadius='30' data-borderTopRightRadius='30' data-fontSize='30'>
		        <p class="name img-size" data-fontSize='32' data-lineHeight='90'>新手体验标</p>
		        <p class="red img-size" data-fontSize='80' data-lineHeight='82'>12<span class="img-size" data-fontSize='60'>.0%</span></p>
		        <!--<p class="img-size" data-fontSize='30'>预期年化</p>-->
				<p class="img-size" data-fontSize='30'>历史年化收益率</p>
		        <div class="info2 img-size" data-width='533' data-fontSize='30' data-paddingTop='30' data-paddingBottom='30'>收益立即到账，随时可提现!</div>
		        <div class="regbtn img-size" data-width='460' data-height="70" data-lineHeight="70" data-marginTop="70" data-fontSize="32" @click='toBill'>使用10000元体验金</div>
		    </div>
		    <div class="bottbgg img-size" data-width="594" data-height="130">
		    </div>
		</div>
	    <p class="notice img-size" data-lineHeight="100" data-fontSize='24'>操作中如有任何疑问请致联系客服：400-690-8896</p>
    </div>
	<!--<about></about>-->
</div>
</template>