(()=>{

    class Accordion {
        constructor(obj){
           //初期化
           console.log('obj',obj)
            const $elm = document.querySelector(obj.hookName);
            const $trigger = $elm.getElementsByTagName(obj.tagName);

            const triggerLen = $trigger.length;
            for(let index=0; index < triggerLen; index++){
                $trigger[index].addEventListener('click', (e) => this.clickHandler(e));
            }
        }
        //クリックしたら実行される処理
        clickHandler = (e) => {
            e.preventDefault();

            const $target = e.currentTarget;
            const $content = $target.nextElementSibling;

            if($content.style.display == 'block'){
                $content.style.display = 'none';
            }else{
                $content.style.display = 'block';
            }
        }
    }

    const futsalAccordion = new Accordion({
        hookName: '#js-futsal',
        tagName: 'a'
    })

    const societyAccordion = new Accordion({
        hookName: '#js-society',
        tagName: 'p'
    })

    const soccerAccordion = new Accordion({
        hookName: '#js-soccer',
        tagName: 'dt'
    })

    const featureAccordion = new Accordion({
        hookName: '#js-feature',
        tagName: 'p'
    })


 })();