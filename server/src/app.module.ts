import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { AppResolver } from './app.resolver';
import { UnitModule } from './modules/unit/unit.module';
import { LandlordModule } from './modules/landlord/landlord.module';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: {
                path: 'src/schema.gql',
            },
            sortSchema: true,
            buildSchemaOptions: {
                numberScalarMode: 'integer',
            },
        }),
        UnitModule,
        LandlordModule,
    ],
    controllers: [AppController],
    providers: [AppService, AppResolver],
})
export class AppModule {}
