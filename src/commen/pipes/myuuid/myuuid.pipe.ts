import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { validate as uuidValidate } from 'uuid';
@Injectable()
export class MyuuidPipe implements PipeTransform {
  transform(value : any, metadata: ArgumentMetadata) {
    
    let check = uuidValidate(value)
    
    if (!check) {
        throw new BadRequestException(`Invalid ${metadata.data} . ${value} is not UUID `)
    }

    return value;

  }
}
