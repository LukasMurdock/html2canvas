import {IPropertyIdentValueDescriptor, PropertyDescriptorParsingType} from '../IPropertyDescriptor';
import {Context} from '../../core/context';
export const enum OBJECT_FIT {
    CONTAIN = 'contain',
    COVER = 'cover'
}

export const objectFit: IPropertyIdentValueDescriptor<OBJECT_FIT> = {
    name: 'object-fit',
    initialValue: 'fill',
    prefix: false,
    type: PropertyDescriptorParsingType.IDENT_VALUE,
    parse: (_context: Context, overflow: string) => {
        switch (overflow) {
            case 'contain':
                return OBJECT_FIT.CONTAIN;
            case 'cover':
            default:
                return OBJECT_FIT.COVER;
        }
    }
};
