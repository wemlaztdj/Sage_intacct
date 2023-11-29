  
<script>
//jq('#savebuttid').hide();
  jq('button:nth-of-type(2)').hide();
  var html = '<button id="addAllocation" name="submitje_pagescript" class="btn btn-primary" onClick="addAllocations(1)">Add Allocation</button>';
	
	jq('.btn-toolbar').prepend(html);
  
  if({!CURRENTUSER.login!}=='tcao'){
    
  }else{
  jq("#_obj__TEMPLATE_LIST").prop("disabled", true)
  jq("#_obj__ALLOCATIONS_FOR_INVOICES").prop("disabled", true)

	jq("#addAllocation").prop("disabled", true)
  }
  


function addAllocations(type) {
    var rowCount = jq("#tbody__obj__ENTRIES tr").length;
    var headerproject= jq('#_obj__PROJECT')

    var allocationarray=[]
    var linearray=[]
    
    if  (jq('#_obj__ALLOCATIONS_FOR_INVOICES').val()!=''){
      	for (let i=0;i<rowCount;i++){
          var itemid='#_obj__ENTRIES_'+i+'_-_obj__ITEMID';
          var projectid='#_obj__ENTRIES_'+i+'_-_obj__PROJECTID';
          if(jq(projectid).val()==''&&jq(itemid).val()!=''){
            allocationarray.push(i)
          }elseif(jq(itemid).val()!=''&&jq(projectid).val()!=''){
            linearray.push(i)
          }
          switch (allocationarray.length) {
  					case 0:
    // do something
                    for (let i=0;i<rowCount;i++){
                        var itemid='#_obj__ENTRIES_'+i+'_-_obj__ITEMID';
                        var qty='#_obj__ENTRIES_'+i+'_-_obj__UIQTY';
                        var allocation='#_obj__ENTRIES_'+i+'_-_obj__ALLOCATION';
                        var price='#_obj__ENTRIES_'+i+'_-_obj__UIPRICE';
                        var value='#_obj__ENTRIES_'+i+'_-_obj__UIVALUE';
            
                        var location='#_obj__ENTRIES_'+i+'_-_obj__LOCATION';
                        var department='#_obj__ENTRIES_'+i+'_-_obj__DEPARTMENT';
                        var classid='#_obj__ENTRIES_'+i+'_-_obj__CLASSID';
                        var projectid='#_obj__ENTRIES_'+i+'_-_obj__PROJECTID';
                        
                        if (jq(itemid).val()!='') {
                            jq(price).val(jq(value).val())
                            jq(qty).val(1)
                            
                            jq(location).val('')
                            jq(department).val('')
                            jq(classid).val('')
                            jq(projectid).val('')
                            jq(allocation).val(jq('#_obj__ALLOCATIONS_FOR_INVOICES').val())
                        }
                    }
    					break;
              
  					case 1:
    // do something else
                    var theamount=0
                        for (let i = 0; i < linearray.length; i++) {
                          var itemid='#_obj__ENTRIES_'+i+'_-_obj__ITEMID';
                          var qty='#_obj__ENTRIES_'+i+'_-_obj__UIQTY';
                          var allocation='#_obj__ENTRIES_'+i+'_-_obj__ALLOCATION';
                          var price='#_obj__ENTRIES_'+i+'_-_obj__UIPRICE';
                          var value='#_obj__ENTRIES_'+i+'_-_obj__UIVALUE';
              
                          var location='#_obj__ENTRIES_'+i+'_-_obj__LOCATION';
                          var department='#_obj__ENTRIES_'+i+'_-_obj__DEPARTMENT';
                          var classid='#_obj__ENTRIES_'+i+'_-_obj__CLASSID';
                          var projectid='#_obj__ENTRIES_'+i+'_-_obj__PROJECTID';
                          
                          if (jq(itemid).val()!='') {
                            theamount=theamount+jq(value).val()
                                                        
                            jq(price).val(0)

                          }
                        }
                        for (let i = 0; i < allocationarray.length; i++) {
                          var itemid='#_obj__ENTRIES_'+i+'_-_obj__ITEMID';
                          var qty='#_obj__ENTRIES_'+i+'_-_obj__UIQTY';                           
                          var allocation='#_obj__ENTRIES_'+i+'_-_obj__ALLOCATION';
                          var price='#_obj__ENTRIES_'+i+'_-_obj__UIPRICE';

                          var location='#_obj__ENTRIES_'+i+'_-_obj__LOCATION';
                          var department='#_obj__ENTRIES_'+i+'_-_obj__DEPARTMENT';
                          var classid='#_obj__ENTRIES_'+i+'_-_obj__CLASSID';
                          var projectid='#_obj__ENTRIES_'+i+'_-_obj__PROJECTID';
                              
                          if (jq(itemid).val()!='') {
                            jq(location).val('')
                            jq(department).val('')
                            jq(classid).val('')
                            jq(projectid).val('')
                                                        
                            jq(price).val(theamount)
                            jq(qty).val(1)
                            jq(allocation).val(jq('#_obj__ALLOCATIONS_FOR_INVOICES').val())
                          }

                            }
                          
                            
    					break;
              
            case linearray.length:
    // do something if none of the cases match
    					break;
              
            default:
              
              break;
            }
        }
      
		jq(headerproject).val('')
    }
 								
}







</script>
