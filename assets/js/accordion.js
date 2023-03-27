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

    const dummyAccordion = new Accordion({
        hookName: '#js-accordion',
        tagName: 'a'
    })

    const fuckingAccordion = new Accordion({
        hookName: '#js-faq',
        tagName: 'p'
    })

    const miniAccordion = new Accordion({
        hookName: '#js-accordion-mini',
        tagName: 'dt'
    })

 })();