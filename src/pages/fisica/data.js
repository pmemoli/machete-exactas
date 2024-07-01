import { MarkerType } from 'reactflow';
const position = { x: 0, y: 0 };
const style = {
    strokeWidth: 2,
    stroke: '#545350',
};

export const nodes = [
    {
        id: 'cbc',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#D9B600',
            label: 'CBC',
        },
        position,
    },
    {
        id: 'mate1',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Matemática 1',
        },
        position,
    },
    {
        id: 'mate2',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Matemática 2',
        },
        position,
    },
    {
        id: 'mate3',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Matemática 3',
        },
        position,
    },
    {
        id: 'mate4',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Matemática 4',
        },
        position,
    },
    {
        id: 'calculo',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Cálculo',
        },
        position,
    },
    {
        id: 'fisica1',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Física 1',
        },
        position,
    },
    {
        id: 'fisica2',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Física 2',
        },
        position,
    },
    {
        id: 'fisica3',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Física 3',
        },
        position,
    },
    {
        id: 'fisica4',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Física 4',
        },
        position,
    },
    {
        id: 'mecanica',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Mecánica clásica',
        },
        position,
    },
    {
        id: 'teo1',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Física teórica 1',
        },
        position,
    },
    {
        id: 'teo2',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Física teórica 2',
        },
        position,
    },
    {
        id: 'teo3',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Física teórica 3',
        },
        position,
    },
    {
        id: 'materia1',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Estructura de la Materia 1',
        },
        position,
    },
    {
        id: 'materia2',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Estructura de la Materia 2',
        },
        position,
    },
    {
        id: 'materia3',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Estructura de la Materia 3',
        },
        position,
    },
    {
        id: 'materia4',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Estructura de la Materia 4',
        },
        position,
    },
    {
        id: 'labo1',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Laboratorio 1',
        },
        position,
    },
    {
        id: 'labo2',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Laboratorio 2',
        },
        position,
    },
    {
        id: 'labo3',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Laboratorio 3',
        },
        position,
    },
    {
        id: 'labo4',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Laboratorio 4',
        },
        position,
    },
    {
        id: 'labo5',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Laboratorio 5',
        },
        position,
    },
    {
        id: 'labo6',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Laboratorio 6',
        },
        position,
    },
    {
        id: 'labo7',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Laboratorio 7',
        },
        position,
    },
];

export const edges = [
    {
        id: 'cbc-mate1',
        source: 'cbc',
        target: 'mate1',
        style,
    },
    {
        id: 'cbc-mate2',
        source: 'cbc',
        target: 'mate2',
        style,
    },
    {
        id: 'cbc-fisica1',
        source: 'cbc',
        target: 'fisica1',
        style,
    },
    {
        id: 'cbc-labo1',
        source: 'cbc',
        target: 'labo1',
        style,
    },
    {
        id: 'mate1-mate3',
        source: 'mate1',
        target: 'mate3',
        animated: true,
        style,
    },
    {
        id: 'mate1-mate4',
        source: 'mate1',
        target: 'mate4',
        style,
    },
    {
        id: 'mate1-calculo',
        source: 'mate1',
        target: 'calculo',
        style,
    },
    {
        id: 'mate1-fisica3',
        source: 'mate1',
        target: 'fisica3',
        style,
    },
    {
        id: 'mate2-calculo',
        source: 'mate2',
        target: 'calculo',
        style,
    },
    {
        id: 'mate2-mate4',
        source: 'mate2',
        target: 'mate4',
        style,
    },
    {
        id: 'mate2-mecanica',
        source: 'mate2',
        target: 'mecanica',
        style,
    },
    {
        id: 'mate3-fisica3',
        source: 'mate3',
        target: 'fisica3',
        animated: true,
        style,
    },
    {
        id: 'mate3-mate4',
        source: 'mate3',
        target: 'mate4',
        animated: true,
        style,
    },
    {
        id: 'mate3-mecanica',
        source: 'mate3',
        target: 'mecanica',
        style,
    },
    {
        id: 'mate4-teo2',
        source: 'mate4',
        target: 'teo2',
        animated: true,
        style,
    },
    {
        id: 'mate4-teo1',
        source: 'mate4',
        target: 'teo1',
        animated: true,
        style,
    },
    {
        id: 'mate4-materia',
        source: 'mate4',
        target: 'materia',
        animated: true,
        style,
    },
    {
        id: 'fisica1-labo2',
        source: 'fisica1',
        target: 'labo2',
        animated: true,
        style,
    },
    {
        id: 'fisica1-fisica2',
        source: 'fisica1',
        target: 'fisica2',
        animated: true,
        style,
    },
    {
        id: 'fisica1-fisica3',
        source: 'fisica1',
        target: 'fisica3',
        animated: true,
        style,
    },
    {
        id: 'fisica1-fisica4',
        source: 'fisica1',
        target: 'fisica4',
        style,
    },
    {
        id: 'fisica1-mecanica',
        source: 'fisica1',
        target: 'mecanica',
        style,
    },
    {
        id: 'fisica2-fisica4',
        source: 'fisica2',
        target: 'fisica4',
        animated: true,
        style,
    },
    {
        id: 'fisica2-labo3',
        source: 'fisica2',
        target: 'labo3',
        animated: true,
        style,
    },
    {
        id: 'fisica3-fisica4',
        source: 'fisica3',
        target: 'fisica4',
        animated: true,
        style,
    },
    {
        id: 'fisica3-mecanica',
        source: 'fisica3',
        target: 'mecanica',
        animated: true,
        style,
    },
    {
        id: 'fisica3-materia1',
        source: 'fisica3',
        target: 'materia1',
        style,
    },
    {
        id: 'fisica4-labo4',
        source: 'fisica4',
        target: 'labo4',
        animated: true,
        style,
    },
    {
        id: 'fisica4-teo1',
        source: 'fisica4',
        target: 'teo1',
        animated: true,
        style,
    },
    {
        id: 'fisica4-materia1',
        source: 'fisica4',
        target: 'materia1',
        animated: true,
        style,
    },
    {
        id: 'fisica4-teo2',
        source: 'fisica4',
        target: 'teo2',
        style,
    },
    {
        id: 'fisica4-teo3',
        source: 'fisica4',
        target: 'teo3',
        style,
    },
    {
        id: 'mecanica-teo1',
        source: 'mecanica',
        target: 'teo1',
        animated: true,
        style,
    },
    {
        id: 'mecanica-teo2',
        source: 'mecanica',
        target: 'teo2',
        animated: true,
        style,
    },
    {
        id: 'mecanica-teo3',
        source: 'mecanica',
        target: 'teo3',
        animated: true,
        style,
    },
    {
        id: 'mecanica-materia1',
        source: 'mecanica',
        target: 'materia1',
        animated: true,
        style,
    },
    {
        id: 'teo2-materia2',
        source: 'teo2',
        target: 'materia2',
        animated: true,
        style,
    },
    {
        id: 'teo2-materia3',
        source: 'teo2',
        target: 'materia3',
        animated: true,
        style,
    },
    {
        id: 'teo2-materia4',
        source: 'teo2',
        target: 'materia4',
        animated: true,
        style,
    },
    {
        id: 'teo3-materia2',
        source: 'teo3',
        target: 'materia2',
        animated: true,
        style,
    },
    {
        id: 'teo3-materia3',
        source: 'teo3',
        target: 'materia3',
        animated: true,
        style,
    },
    {
        id: 'labo1-labo2',
        source: 'labo1',
        target: 'labo2',
        style,
    },
    {
        id: 'labo2-labo3',
        source: 'labo2',
        target: 'labo3',
        style,
    },
    {
        id: 'labo3-labo4',
        source: 'labo3',
        target: 'labo4',
        style,
    },
    {
        id: 'labo4-labo5',
        source: 'labo4',
        target: 'labo5',
        style,
    },
    {
        id: 'labo5-labo6',
        source: 'labo5',
        target: 'labo6',
        style,
    },
    {
        id: 'labo6-labo7',
        source: 'labo6',
        target: 'labo7',
        style,
    },
];
