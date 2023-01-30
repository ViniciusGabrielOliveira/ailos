import { Component, Input } from '@angular/core';

export interface CardCpf
{
    title?: string,
    description?: string,
    lines?: Array<LinesCardCpf>
    labelButton?: string
}

export interface LinesCardCpf
{
    icon?: string,
    label?: string,
    value?: string
}

@Component({
  selector: 'app-card-cpf',
  templateUrl: './card-cpf.component.html',
  styleUrls: ['./card-cpf.component.scss']
})
export class CardCpfComponent
{
    @Input()
    public cardCpf: CardCpf = {
        title: 'Situação cadastral do CPF',
        description: 'Consulta na Receita Federal',
        lines: [
            {
                label: 'Nome',
                value: 'Mariane de Sousa Oliveira',
                icon: 'profile_icon.png'
            },
            {
                label: 'Situação do CPF',
                value: 'Regular',
                icon: 'icon_regular.svg'
            }
        ],
        labelButton: 'Excluir'
    }
}
