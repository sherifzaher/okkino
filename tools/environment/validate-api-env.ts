import { plainToInstance, Type } from 'class-transformer'
import { apiEnv, IApiEnv } from '../../apps/api/src/environments/environment'
import { IsNotEmpty, validateSync } from 'class-validator'
import { IsBoolean, IsDefined, IsNumber, IsString, ValidateNested } from 'class-validator'
import 'reflect-metadata'

class ApiEnvDbVo {
  @IsNotEmpty()
  @IsString()
  public url: string
}

class ApiEnvApiVo {
  @IsNumber()
  public port: number
}

export class ApiEnvVo implements IApiEnv {
  @IsBoolean()
  public isProd: boolean

  @IsDefined()
  @ValidateNested()
  @Type(() => ApiEnvDbVo)
  public db: ApiEnvDbVo

  @IsDefined()
  @ValidateNested()
  @Type(() => ApiEnvApiVo)
  public api: ApiEnvApiVo
}

const apiEnvVoInstance = plainToInstance(ApiEnvVo, apiEnv)
const errors = validateSync(apiEnvVoInstance)

if (errors.length) {
  console.error(errors)
  process.exit(1)
}
