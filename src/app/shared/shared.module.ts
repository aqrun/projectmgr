/**
 * 共享模块
 * 不能有providers
 * 随意多次加载
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms';

import { NgZorroAntdModule } from 'ng-zorro-antd';

const MODULES = [
    CommonModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
];

@NgModule({
    imports:[
        ...MODULES
    ],
    exports: [
        ...MODULES
    ],
    declarations: [

    ]
})
export class SharedModule {

}
