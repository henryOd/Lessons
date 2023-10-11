const baseMo=require('./5-baseModule')

function extMo(){
    console.log('extended module succesful')

    function baseMt(){
        console.log('hello all done')
    }

}

module.exports=extMo