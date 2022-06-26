<template>
<div class="model-basic-locker">
    <div class="header-basic-locker">
        <h4>{{ name_locker}}</h4>
        <button type="button" class="btn-close-basic-locker">X</button>
    </div>
    <div class="body-locker">
        <form class="form-basic-locker">
            <basic-basic-locker />
        </form>
    </div>
    <div class="footer-locker">
        <div class="footer-locker-close">
            <button type="button" class="btn-close-footer-locker">Cerrar</button>
        </div>
    </div>
</div>
</template>

<script>
import FormBasicUser from "./FormBasicUser.vue"
export default {
    name: 'BasicLocker',
    components:{
        FormBasicUser
    }
}
</script>